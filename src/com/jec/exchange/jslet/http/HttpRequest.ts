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

/**
 * Represents one HTTP request which can be sent to a server.
 */
export interface HttpRequest {

  ////////////////////////////////////////////////////////////////////////////
  // Public accessors
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the URL path on which a router instance was mounted.
   * 
   * @return {string} the URL path on which a router instance was mounted.
   */
  getBaseUrl():string;

  /**
   * Returns an object that contains key-value pairs of data submitted in the
   * request body.
   * 
   * @return {any} the key-value pairs of data submitted in the request body.
   */
  getBody():any;

  /**
   * Returns an object that contains cookies sent by the request.
   * 
   * @return {any} an object that contains cookies sent by the request.
   */
  getCookies():any;

  /**
   * Returns the hostname derived from the Host HTTP header.
   * 
   * @return {string} the hostname derived from the Host HTTP header.
   */
  getHostname():string;

  /**
   * Returns the remote IP address of the request.
   * 
   * @return {string} the remote IP address of the request.
   */
  getIp():string;

  /**
   * Returns a string corresponding to the HTTP method of the request. Valid
   * values are constants of the <code>HttpMethods</code> class.
   * 
   * @return {string} a string corresponding to the HTTP method of the request.
   */
  getMethod():string;

  /**
   * Returns a string corresponding to the original request URL, for internal
   * routing purposes.
   * 
   * @return {string} a string corresponding to the original request URL.
   */
  getOriginalUrl():string;

  /**
   * Returns a string corresponding to the path part of the request URL.
   * 
   * @return {string} the path part of the request URL.
   */
  getPath():string;

  /**
   * Returns a string that represents the the request protocol string.
   * 
   * @return {string} the request protocol string.
   */
  getProtocol():string;

  /**
   * Returns an object that contains a property for each query string parameter
   * in the route, or an empty object whether there is no query string.
   * 
   * @return {any} an object that contains a property for each query string
   *               parameter in the route.
   */
  getQuery():any;

  /**
   * Returns an boolean value that indictas whether a TLS connection is
   * established (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether a TLS connection is
   *                   established; <code>false</code> otherwhise.
   */
  isSecured():boolean;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Checks if the specified content types is acceptable, based on the request
   * <code>Accept</code> HTTP header field.
   * 
   * The type value may be a single MIME type string (such as 
   * </code>application/json</code>), or an extension name (such as 
   * <code>json</code>).
   * 
   * @param {string} type the type value to check.
   * @return {boolean} <code>true</code> whether the specified content types is
   *                   acceptable; <code>false</code> otherwhise.
   */
  accepts(type:string):boolean;
  
  /**
   * Returns <code>true</code> whether the specified character set is accepted;
   * <code>false</code> otherwhise.
   * 
   * @param {string} charset the charset value to check.
   * @return {boolean} <code>true</code> whether the specified character set is
   *                   accepted; <code>false</code> otherwhise.
   */
  acceptsCharset(charset:string):boolean;
  
  /**
   * Returns <code>true</code> whether the specified encoding is accepted;
   * <code>false</code> otherwhise.
   * 
   * @param {string} encoding the encoding value to check.
   * @return {boolean} <code>true</code> whether the specified encoding is
   *                  accepted; <code>false</code> otherwhise.
   */
  acceptsEncoding(encoding:string):boolean;
  
  /**
   * Returns <code>true</code> whether the specified language is accepted;
   * <code>false</code> otherwhise.
   * 
   * @param {string} lang the language value to check.
   * @return {boolean} <code>true</code> whether the specified language is
   *                   accepted; <code>false</code> otherwhise.
   */
  acceptsLanguage(lang:string):boolean;
  
  /**
   * Returns the specified HTTP request header field (case-insensitive match).
   * The Referrer and Referer fields are interchangeable.
   * 
   * @param {string} field the language value(s) to check.
   * @return {string} a string that represents the specified HTTP request header
   *                  field.
   */
  getHeader(field:string):string;

  /**
   * Returns a boolean value that indicates whether the incoming request
   * <code>Content-Type</code> HTTP header field matches the MIME type specified
   * by thetype parameter (<code>true</code>), or not (<code>false</code>).
   * 
   * The type value may be a single MIME type string (such as 
   * <code>application/json</code>), an extension name (such as 
   * <code>json</code>), a comma-delimited list, or an array.
   * 
   * @param {string|string[]} types the content type value(s) to check.
   * @return {boolean} <code>true</code> whether the specified MIME type matches 
   *                   the request HTTP header; <code>false</code> otherwhise.
   */
  isTypeOfContent(type:string | string[]):boolean;
}