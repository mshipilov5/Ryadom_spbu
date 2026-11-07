package integration_test

import (
	"encoding/json"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gofiber/fiber/v2"
	httpcontroller "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http"
	educationservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/education"
	educationstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/education"
)

func TestMaterialsEndpointFiltersByAllTags(t *testing.T) {
	server := newTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/psychoeducation/materials?tags=stress&tags=exams", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusOK)
	}

	var body struct {
		Items []struct {
			Slug string `json:"slug"`
		} `json:"items"`
	}
	decodeResponse(t, response, &body)
	if len(body.Items) != 1 || body.Items[0].Slug != "exam-stress" {
		t.Fatalf("items = %#v, want only exam-stress", body.Items)
	}
}

func TestMaterialDetailDoesNotExposeUnknownField(t *testing.T) {
	server := newTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/psychoeducation/materials/exam-stress", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusOK)
	}

	var body map[string]any
	decodeResponse(t, response, &body)
	if body["author"] == "" || body["reviewer"] == "" || body["reviewedAt"] == "" {
		t.Fatalf("response does not contain required editorial metadata: %#v", body)
	}
	if _, exists := body["safeNextStep"]; exists {
		t.Fatalf("response must not contain safeNextStep: %#v", body)
	}
}

func TestMaterialsEndpointRejectsLongQuery(t *testing.T) {
	server := newTestServer()
	query := make([]byte, 101)
	for index := range query {
		query[index] = 'a'
	}
	request := httptest.NewRequest(http.MethodGet, "/api/v1/psychoeducation/materials?q="+string(query), nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusBadRequest)
	}
}

func TestDraftIsNotAvailableThroughPublicAPI(t *testing.T) {
	server := newTestServer()
	request := httptest.NewRequest(http.MethodGet, "/api/v1/psychoeducation/materials/editorial-draft", nil)
	response := executeRequest(t, server, request)

	if response.StatusCode != http.StatusNotFound {
		t.Fatalf("status = %d, want %d", response.StatusCode, http.StatusNotFound)
	}
}

func newTestServer() *fiber.App {
	service := educationservice.New(educationstore.NewMemoryStore())
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	httpcontroller.NewRouter(app, service, "http://localhost:3000", slog.Default())
	return app
}

func executeRequest(t *testing.T, app *fiber.App, request *http.Request) *http.Response {
	t.Helper()

	response, err := app.Test(request, -1)
	if err != nil {
		t.Fatalf("execute request: %v", err)
	}
	t.Cleanup(func() { _ = response.Body.Close() })

	return response
}

func decodeResponse(t *testing.T, response *http.Response, target any) {
	t.Helper()
	if err := json.NewDecoder(response.Body).Decode(target); err != nil {
		t.Fatalf("decode response: %v", err)
	}
}
