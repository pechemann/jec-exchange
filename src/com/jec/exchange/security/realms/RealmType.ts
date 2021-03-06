//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * Provides values that specify the type of realm used by a JEC domain
 * container.
 */
export enum RealmType {

  /**
   * Indicates that the container stores user information in a file.
   */
  FILE = "file",

  /**
   * Indicates that the container stores user information in a LDAP directory.
   */
  LDAP = "ldap",

  /**
   * Indicates that the container stores user information in a database.
   */
  DB = "db",

  /**
   * Indicates that the container stores user information in the administration
   * keystore file.
   */
  ADMIN_FILE = "admin-file",

  /**
   * Indicates that the container stores user information through a custom
   * implementation of the <code>Realm</code> interface.
   */
  CUSTOM = "custom"
}