#!/usr/bin/env bash

# This script regenerates bindings for the engine service in the various languages that this repo supports

set -euo pipefail
script_dirpath="$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd)"
root_dirpath="$(dirname "${script_dirpath}")"

# ================================ CONSTANTS =======================================================
GENERATOR_SCRIPT_FILENAME="generate-protobuf-bindings.sh"  # Must be on the PATH
ENGINE_DIRNAME="kurtosis-engine-rpc-api"
ENGINE_BINDINGS_DIRNAME="kurtosis_engine_rpc_api_bindings"
GOLANG_DIRNAME="golang"
TYPESCRIPT_DIRNAME="typescript"

# =============================== MAIN LOGIC =======================================================
input_dirpath="${root_dirpath}/${ENGINE_DIRNAME}"

# Golang
go_output_dirpath="${root_dirpath}/${GOLANG_DIRNAME}/${ENGINE_BINDINGS_DIRNAME}"
if ! GO_MOD_FILEPATH="${root_dirpath}/${GOLANG_DIRNAME}/go.mod" "${GENERATOR_SCRIPT_FILENAME}" "${input_dirpath}" "${go_output_dirpath}" golang; then
    echo "Error: An error occurred generating Go bindings in directory '${go_output_dirpath}'" >&2
    exit 1
fi
echo "Successfully generated Go bindings in directory '${go_output_dirpath}'"

# TypeScript
typescript_output_dirpath="${root_dirpath}/${TYPESCRIPT_DIRNAME}/src/${ENGINE_BINDINGS_DIRNAME}"
if ! "${GENERATOR_SCRIPT_FILENAME}" "${input_dirpath}" "${typescript_output_dirpath}" typescript; then
    echo "Error: An error occurred generating TypeScript bindings in directory '${typescript_output_dirpath}'" >&2
    exit 1
fi
echo "Successfully generated TypeScript bindings in directory '${typescript_output_dirpath}'"
