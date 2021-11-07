#!/usr/bin/env bash
# 2021-07-08 WATERMARK, DO NOT REMOVE - This script was generated from the Kurtosis Bash script template

set -euo pipefail   # Bash "strict mode"
script_dirpath="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root_dirpath="$(dirname "${script_dirpath}")"



# ==================================================================================================
#                                             Constants
# ==================================================================================================
API_DIRNAME="api"
SUPPORTED_LANGS_FILENAME="supported-languages.txt"



# ==================================================================================================
#                                             Main Logic
# ==================================================================================================
api_dirpath="${root_dirpath}/${API_DIRNAME}"
supported_langs_filepath="${api_dirpath}/${SUPPORTED_LANGS_FILENAME}"
for lang in $(cat "${supported_langs_filepath}"); do
    echo "Building '${lang}'..."
    buildscript_filepath="${api_dirpath}/${lang}/scripts/build.sh"
    if ! bash "${buildscript_filepath}"; then
        echo "Error: '${lang}' buildscript failed" >&2
        exit 1
    fi
    echo "Successfully built '${lang}'"
done
