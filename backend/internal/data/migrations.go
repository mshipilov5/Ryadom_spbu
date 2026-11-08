package data

import _ "embed"

// InitialUp contains the initial schema and deterministic local development data.
//
//go:embed 000001_initial.up.sql
var InitialUp string
