//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {HttpStatusCode} from "jec-commons";

/**
 * The interface that you must implement for creating data transfert objects
 * used to manage authentication errors.
 */
export interface AuthenticationError {

  /**
   * Returns the HTTP status code for this error.
   * 
   * @return {HttpStatusCode} a member of the <code>HttpStatusCode</code> enum.
   */
  getStatusCode():HttpStatusCode;
}