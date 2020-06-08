/**
 * Copyright 2020 The UsaCon Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const iconDataURL = `data:image/png;base64,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`;

export function saveAPIKeyToBrowser(apiKey) {
  const cred = new PasswordCredential({
    name: apiKey.name,
    id: apiKey.token,
    password: apiKey.secret,
    iconURL: iconDataURL,
  });
  return navigator.credentials.store(cred);
}

export function getAPIKey(required) {
  let mediation = "optional";
  if (required) {
    mediation = "required";
  }
  return navigator.credentials.get({ password: true, mediation: mediation });
}
