/*!
 * JEC Exchange Node Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-exchange" {

import { Logger, UrlPattern } from "jec-commons";

export interface WebJsletParams {    name: string;    urlPatterns: string[];    template?: string;}export function WebJslet(params: WebJsletParams): Function;export interface JsletContext {    addJslet(jslet: Jslet): void;    getJslet(url: string): Jslet;    getStatusInfo(): any;    getDirectoryPath(): string;    getSourcePath(): string;    getSecurityContext(): SecurityContext;    getSessionContext(): SessionContext;    authenticate(req: HttpRequest, res: HttpResponse, result: (error?: any) => void): void;    invalidateSession(req: HttpRequest, res: HttpResponse, result: (error?: SessionError) => any): void;    getLogger(): Logger;}export class JsletError extends Error {    constructor(message: string);}export interface CookieOptions {    domain?: string;    encode?: Function;    expires?: Date;    httpOnly?: boolean;    maxAge?: number;    path?: string;    secure?: boolean;    signed?: boolean;    sameSite?: string | boolean;}export class DotFiles {    static readonly ALLOW: string;    static readonly DENY: string;    static readonly IGNORE: string;}export interface HttpRequest {    getBaseUrl(): string;    getBody(): any;    getCookies(): any;    getHostname(): string;    getIp(): string;    getMethod(): string;    getOriginalUrl(): string;    getPath(): string;    getProtocol(): string;    getQuery(): any;    isSecured(): boolean;    accepts(types: string | string[]): string | void;    acceptsCharsets(charset: string | string[]): string | boolean;    acceptsEncodings(encoding: string | string[]): string | boolean;    acceptsLanguages(lang: string | string[]): string | boolean;    getHeader(field: string): string;    isTypeOfContent(type: string | string[]): boolean;}export interface HttpResponse {    getHeadersSent(): boolean;    attachment(filename?: string): HttpResponse;    cookie(name: string, value: string, options?: CookieOptions): HttpResponse;    clearCookie(name: string, options?: CookieOptions): HttpResponse;    download(path: string, filename?: string, complete?: (err?: Error) => any): void;    end(data?: string | any, encoding?: string): HttpResponse;    format(obj: any): HttpResponse;    getHeader(field: string): string;    links(links: any): HttpResponse;    location(path: string): HttpResponse;    redirect(path: string): HttpResponse;    send(body: any): HttpResponse;    sendFile(path: string, options?: SendFileOptions, complete?: (err?: Error) => any): HttpResponse;    sendStatus(statusCode: number): HttpResponse;    setHeader(field: string, value: string): HttpResponse;    status(statusCode: number): HttpResponse;    type(type: string): HttpResponse;    vary(field: string): HttpResponse;}export interface SendFileOptions {    maxAge?: number | string;    root?: string;    lastModified?: boolean;    headers?: any;    dotfiles?: string;    acceptRanges?: boolean;    cacheControl?: boolean;}export class HttpJslet implements Jslet {    constructor();    private static buildEmptyDataObj();    private static readonly EMPTY_DATA;    protected __context: JsletContext;    protected __template: string;    init(): void;    destroy(): void;    before(): void;    after(): void;    getContext(): JsletContext;    get(key: string): any;    getName(): string;    getTemplate(): string;    setTemplate(template: string): void;    getUrlPatterns(): string[];    setContext(context: JsletContext): void;    service(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doDelete(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doGet(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doOptions(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doTrace(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doHead(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doConnect(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doPut(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;    doPost(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;}export class JsletConnectorRefs {    static readonly WEB_JSLET_CONNECTOR_REF: string;}export interface Jslet {    init(): void;    destroy(): void;    before(): void;    after(): void;    getContext(): JsletContext;    service(req: HttpRequest, res: HttpResponse, exit: (req: HttpRequest, res: HttpResponse, data: any) => void): void;}export interface SecurityContext {    addSecurityRole(role: SecurityRole): void;    getSecurityRole(name: string): SecurityRole;    addSecurityConstraint(constraint: SecurityConstraint): void;    getSecurityConstraint(url: string): SecurityConstraint;    addStaticResources(resources: StaticResources): void;    getStaticResources(url: string): StaticResources;    getContextRoot(): string;}export interface SessionContext {    getContextRoot(): string;    getErrorUrl(): string;    invalidateSession(req: HttpRequest, result: (error?: SessionError) => any): void;    initSessionId(): SessionId;    initSession(req: HttpRequest, sessionOwner: SessionOwner, result: (error?: SessionError) => any): void;    loadSession(sessionId: SessionId, result: (error?: SessionError) => any): void;    unloadSession(sessionId: SessionId, result: (error?: SessionError) => any): void;    refreshSession(sessionId: SessionId, data: any, result: (error?: SessionError) => any): void;    hasSession(sessionId: SessionId): boolean;    getSession(sessionId: SessionId): Session;}export interface Credentials {    login: string;    password: string;}export interface UserHashModule {    setPrivateKey(key: string): void;    encryptUser(alias: string, password: string, roles: string[]): string;    encryptAlias(alias: string): string;    encryptPassword(password: string): string;    encryptRoles(roles: string[]): string;    decryptAlias(alias: string): string;    decryptRoles(roles: string): string[];}export interface SessionError {    getSessionId(): SessionId;    getErrorType(): string;    getMessage(): string;}export class SessionErrorType {    static readonly SESSION_EXPIRED: string;    static readonly INVALID_SESSION_ID: string;    static readonly SESSION_PERSISTENCE_FAILED: string;}export class AuthMethod {    static readonly NONE: string;    static readonly FORM: string;    static readonly EJP_FORM: string;    static readonly BASIC: string;    static readonly DIGEST: string;}export interface Realm {    getRealmType(): string;    getRealmConnector(): RealmConnector;    authenticate(credentials: Credentials, success: (sessionOwner: SessionOwner) => any, error: (error: any) => any): void;}export interface RealmConnector {    authenticate(credentials: Credentials, success: Function, error: Function): void;    setSecurityContext(securityContext: SecurityContext): void;    setUserHashModule(userHashModule: UserHashModule): void;    getUserHashModule(): UserHashModule;}export class RealmType {    static readonly FILE: string;    static readonly LDAP: string;    static readonly DB: string;    static readonly ADMIN_FILE: string;    static readonly CUSTOM: string;}export interface SecurityRole {    getName(): string;}export interface SecurityConstraint {    getName(): string;    getUrlPattern(): UrlPattern;    hasRole(role: string): boolean;    getErrorUrl(): string;}export interface Session {    sessionId: SessionId;    sessionOwner: SessionOwner;    expires: number;    data: any;}export interface SessionId {    authurl: string;    getId(): string;}export interface SessionOwner {    getAlias(): string;    isGranted(securityConstraint: SecurityConstraint): boolean;}export interface StaticResources {    getUrlPattern(): UrlPattern;}export function Bootstrap(params?: BootstrapParams): Function;export interface BootstrapParams {    disabled?: boolean;    index?: number;}export class BootstrapConnectorRefs {    static readonly BOOTSTRAP_CONNECTOR_REF: string;}}