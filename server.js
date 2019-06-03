/* eslint-env node */
/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const express = require('express');
const fetch = require('node-fetch');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

// CODELAB: Change this to add a delay (ms) before the server responds.
const FORECAST_DELAY = 4;

// CODELAB: If running locally, set your Dark Sky API key here
// const API_KEY = process.env.DARKSKY_API_KEY;
const API_KEY = `914e51df216a760301e72fea23995b8c`;
const BASE_URL = `https://api.darksky.net/forecast`;

// Start the server
return app.listen('8000', () => {
  // eslint-disable-next-line no-console
  console.log('Local DevServer Started on port 8000...');
});
}

startServer();