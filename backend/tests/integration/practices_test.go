package integration_test

import (
	"log/slog"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gofiber/fiber/v2"
	httpcontroller "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http"
	educationservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/education"
	practicesservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/practices"
	educationstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/education"
	practicesstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/practices"
)

func newPracticesTestServer() *fiber.App {
	educationSvc := educationservice.New(educationstore.NewMemoryStore())
	practicesSvc := practicesservice.New(practicesstore.NewMemoryStore())
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	httpcontroller.NewRouter(app, educationSvc, "http://localhost:3000", slog.Default(), httpcontroller.WithPractices(practicesSvc))
	return app
}

func TestPracticesEndpointFiltersByKind(t *testing.T) {
	server := newPracticesTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/practices?kind=breathing", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusOK)
	}

	var body struct {
		Items []struct {
			Slug string `json:"slug"`
			Kind string `json:"kind"`
		} `json:"items"`
	}
	decodeResponse(t, response, &body)

	if len(body.Items) == 0 {
		t.Fatalf("items = %#v, want breathing practices", body.Items)
	}
	for _, item := range body.Items {
		if item.Kind != "breathing" {
			t.Fatalf("item kind = %q, want breathing", item.Kind)
		}
	}
}

func TestPracticesEndpointRejectsUnknownKind(t *testing.T) {
	server := newPracticesTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/practices?kind=unknown", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusBadRequest)
	}
}

func TestPracticeDetailExposesStepsAndBoundaries(t *testing.T) {
	server := newPracticesTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/practices/long-exhale", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusOK)
	}

	var body map[string]any
	decodeResponse(t, response, &body)

	if _, ok := body["steps"]; !ok {
		t.Fatalf("detail must contain steps: %#v", body)
	}
	if _, ok := body["boundaries"]; !ok {
		t.Fatalf("detail must contain boundaries: %#v", body)
	}
}

func TestPracticeDraftIsNotAvailableThroughPublicAPI(t *testing.T) {
	server := newPracticesTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/practices/editorial-draft", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusNotFound {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusNotFound)
	}
}
