
export enum ServerAction {
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  PASSWORD_RESET = 'Reset',
  PING = 'Ping',
  CHECK_CONNECTION = 'CheckConnection',

  CHARGING_STATION_CLIENT_INITIALIZATION = 'ChargingStationClientInitialization',
  CHARGING_STATION_RESET = 'ChargingStationReset',
  CHARGING_STATION_REQUEST_OCPP_PARAMETERS = 'ChargingStationRequestOcppParameters',
  CHARGING_STATION_CLEAR_CACHE = 'ChargingStationClearCache',
  CHARGING_STATION_GET_CONFIGURATION = 'ChargingStationGetConfiguration',
  CHARGING_STATION_CHANGE_CONFIGURATION = 'ChargingStationChangeConfiguration',
  CHARGING_STATION_DATA_TRANSFER = 'DataTransfer',
  CHARGING_STATION_REMOTE_START_TRANSACTION = 'ChargingStationRemoteStartTransaction',
  CHARGING_STATION_REMOTE_STOP_TRANSACTION = 'ChargingStationRemoteStopTransaction',
  CHARGING_STATION_UNLOCK_CONNECTOR = 'ChargingStationUnlockConnector',
  CHARGING_STATION_SET_CHARGING_PROFILE = 'ChargingStationSetChargingProfile',
  CHARGING_STATION_GET_COMPOSITE_SCHEDULE = 'ChargingStationGetCompositeSchedule',
  CHARGING_STATION_CLEAR_CHARGING_PROFILE = 'ChargingStationClearChargingProfile',
  CHARGING_STATION_GET_DIAGNOSTICS = 'ChargingStationGetDiagnostics',
  CHARGING_STATION_UPDATE_FIRMWARE = 'ChargingStationUpdateFirmware',
  CHARGING_STATION_CHANGE_AVAILABILITY = 'ChargingStationChangeAvailability',
  CHARGING_STATION_DOWNLOAD_QR_CODE_PDF = 'ChargingStationDownloadQrCodePdf',

  CHARGING_STATIONS_EXPORT = 'ChargingStationsExport',
  CHARGING_STATIONS_OCPP_PARAMS_EXPORT = 'ChargingStationsOCPPParamsExport',
  CHARGING_STATION = 'ChargingStation',
  CHARGING_STATIONS_OCPP_PARAMETERS = 'ChargingStationOcppParameters',
  CHARGING_STATIONS_IN_ERROR = 'ChargingStationsInError',
  CHARGING_STATION_UPDATE_PARAMS = 'ChargingStationUpdateParams',
  CHARGING_STATION_LIMIT_POWER = 'ChargingStationLimitPower',
  CHARGING_STATION_DELETE = 'ChargingStationDelete',

  START_TRANSACTION = 'StartTransaction',
  STOP_TRANSACTION = 'StopTransaction',

  CHECK_SMART_CHARGING_CONNECTION = 'CheckSmartChargingConnection',
  TRIGGER_SMART_CHARGING = 'TriggerSmartCharging',

  REGISTRATION_TOKENS = 'RegistrationTokens',
  REGISTRATION_TOKEN_DELETE = 'RegistrationTokenDelete',
  REGISTRATION_TOKEN_REVOKE = 'RegistrationTokenRevoke',

  STATUS_NOTIFICATIONS = 'StatusNotifications',

  TRANSACTION_SOFT_STOP = 'TransactionSoftStop',
  TRANSACTION_DELETE = 'TransactionDelete',
  TRANSACTIONS_DELETE = 'TransactionsDelete',
  ASSIGN_TRANSACTIONS_TO_USER = 'AssignTransactionsToUser',
  UPDATE_TRANSACTION = 'UpdateTransaction',

  TRANSACTION_OCPI_CDR_EXPORT = 'TransactionOcpiCdrExport',

  LOGGINGS = 'Loggings',
  LOGGING = 'Logging',
  LOGGINGS_EXPORT = 'LoggingsExport',

  CHARGING_STATIONS = 'ChargingStations',

  CAR_CATALOGS = 'CarCatalogs',
  CAR_CATALOG = 'CarCatalog',
  CAR_CATALOG_IMAGE = 'CarCatalogImage',
  CAR_CATALOG_IMAGES = 'CarCatalogImages',
  CAR_MAKERS = 'CarMakers',
  CAR_CREATE = 'CarCreate',
  CAR_UPDATE = 'CarUpdate',
  CAR_DELETE = 'CarDelete',
  CARS = 'Cars',
  CAR = 'Car',
  CAR_USERS = 'CarUsers',
  SYNCHRONIZE_CAR_CATALOGS = 'SynchronizeCarCatalogs',

  GET_CONNECTOR_CURRENT_LIMIT = 'GetConnectorCurrentLimit',
  REGISTER_USER = 'RegisterUser',
  CHARGING_PROFILES = 'ChargingProfiles',
  CHARGING_PROFILE_DELETE = 'ChargingProfileDelete',
  CHARGING_PROFILE_UPDATE = 'ChargingProfileUpdate',
  GENERATE_QR_CODE_FOR_CONNECTOR = 'GenerateQrCodeForConnector',
  OCPP_PARAM_UPDATE = 'OCPPParamUpdate',
  RESEND_VERIFICATION_MAIL = 'ResendVerificationEmail',
  END_USER_LICENSE_AGREEMENT = 'EndUserLicenseAgreement',
  CHECK_END_USER_LICENSE_AGREEMENT = 'CheckEndUserLicenseAgreement',
  VERIFY_EMAIL = 'VerifyEmail',
  FIRMWARE_DOWNLOAD = 'FirmwareDownload',

  OFFLINE_CHARGING_STATION = 'OfflineChargingStation',

  LOGS_CLEANUP = 'LogsCleanup',

  SCHEDULER = 'Scheduler',

  REMOTE_PUSH_NOTIFICATION = 'RemotePushNotification',
  EMAIL_NOTIFICATION = 'EmailNotification',
  END_USER_REPORT_ERROR = 'EndUserReportError',

  SYNCHRONIZE_REFUND = 'RefundSynchronize',

  REGISTRATION_TOKEN_CREATE = 'RegistrationTokenCreate',

  INTEGRATION_CONNECTION_CREATE = 'IntegrationConnectionCreate',
  INTEGRATION_CONNECTIONS = 'IntegrationConnections',
  INTEGRATION_CONNECTION = 'IntegrationConnection',
  INTEGRATION_CONNECTION_DELETE = 'IntegrationConnectionDelete',

  OCPI_SETTINGS = 'OcpiSettings',
  OCPI_CLIENT_INITIALIZATION = 'OcpiClientInitialization',
  OCPI_ENPOINT_CREATE = 'OcpiEndpointCreate',
  OCPI_ENPOINT_PING = 'OcpiEndpointPing',
  OCPI_ENPOINT_CHECK_CDRS = 'OcpiEndpointCheckCdrs',
  OCPI_ENPOINT_CHECK_LOCATIONS = 'OcpiEndpointCheckLocations',
  OCPI_ENPOINT_CHECK_SESSIONS = 'OcpiEndpointCheckSessions',
  OCPI_ENPOINT_PULL_CDRS = 'OcpiEndpointPullCdrs',
  OCPI_ENPOINT_PULL_LOCATIONS = 'OcpiEndpointPullLocations',
  OCPI_ENPOINT_PULL_SESSIONS = 'OcpiEndpointPullSessions',
  OCPI_ENPOINT_PULL_TOKENS = 'OcpiEndpointPullTokens',
  OCPI_ENPOINT_SEND_EVSE_STATUSES = 'OcpiEndpointSendEVSEStatuses',
  OCPI_ENPOINT_SEND_TOKENS = 'OcpiEndpointSendTokens',
  OCPI_ENPOINT_GENERATE_LOCAL_TOKEN = 'OcpiEndpointGenerateLocalToken',
  OCPI_ENDPOINTS = 'OcpiEndpoints',
  OCPI_ENDPOINT = 'OcpiEndpoint',
  OCPI_REGISTER = 'OcpiRegister',
  OCPI_AUTHORIZE_TOKEN = 'OcpiAuthorizeToken',
  OCPI_PATCH_TOKEN = 'OcpiPatchToken',
  OCPI_PATCH_LOCATIONS = 'OcpiPatchLocations',
  OCPI_PATCH_STATUS = 'OcpiPatchStatus',
  OCPI_CHECK_CDRS = 'OcpiCheckCdrs',
  OCPI_CHECK_SESSIONS = 'OcpiCheckSessions',
  OCPI_CHECK_LOCATIONS = 'OcpiCheckLocations',
  OCPI_CHECK_TOKENS = 'OcpiCheckTokens',
  OCPI_PUSH_TOKEN = 'OcpiPushToken',
  OCPI_PUSH_TOKENS = 'OcpiPushTokens',
  OCPI_PUSH_SESSION = 'OcpiPushSession',
  OCPI_PUSH_SESSIONS = 'OcpiPushSessions',
  OCPI_PUSH_LOCATIONS = 'OcpiPushLocations',
  OCPI_PUSH_CDRS = 'OcpiPushCdrs',
  OCPI_PULL_CDRS = 'OcpiPullCdrs',
  OCPI_PULL_LOCATIONS = 'OcpiPullLocations',
  OCPI_PULL_SESSIONS = 'OcpiPullSessions',
  OCPI_PULL_TOKENS = 'OcpiPullTokens',
  OCPI_START_SESSION = 'OcpiStartSession',
  OCPI_STOP_SESSION = 'OcpiStopSession',
  OCPI_RESERVE_NOW = 'OcpiReserveNow',
  OCPI_UNLOCK_CONNECTOR = 'OcpiUnlockConnector',
  OCPI_GET_VERSIONS = 'OcpiGetVersions',
  OCPI_GET_LOCATIONS = 'OcpiGetLocations',
  OCPI_GET_TARIFF = 'OcpiGetTariff',
  OCPI_GET_TARIFFS = 'OcpiGetTariffs',
  OCPI_POST_CREDENTIALS = 'OcpiPostCredentials',
  OCPI_DELETE_CREDENTIALS = 'OcpiDeleteCredentials',
  OCPI_ENDPOINT_UPDATE = 'OcpiEndpointUpdate',
  OCPI_ENDPOINT_REGISTER = 'OcpiEndpointRegister',
  OCPI_ENDPOINT_UNREGISTER = 'OcpiEndpointUnregister',
  OCPI_ENDPOINT_DELETE = 'OcpiEndpointDelete',

  OICP_ENPOINT_CREATE = 'OicpEndpointCreate',
  OICP_ENPOINT_PING = 'OicpEndpointPing',
  OICP_ENPOINT_TRIGGER_JOBS = 'OicpEndpointTriggerJobs',
  OICP_PUSH_EVSES = 'OicpPushEvses',
  OICP_PUSH_EVSE_STATUSES = 'OicpPushEvseStatuses',
  OICP_AUTHORIZE_START = 'OicpAuthorizeStart',
  OICP_AUTHORIZE_STOP = 'OicpAuthorizeStop',
  OICP_PUSH_CDRS = 'OcpiPushCdrs',
  OICP_PUSH_EVSE_PRICING = 'OcpiPushEvsePricing',
  OICP_PUSH_PRICING_PRODUCT_DATA = 'OcpiPushPricingProductData',
  OICP_SEND_CHARGING_NOTIFICATION_START = 'OicpSendChargingNotificationStart',
  OICP_SEND_CHARGING_NOTIFICATION_PROGRESS = 'OicpSendChargingNotificationProgress',
  OICP_SEND_CHARGING_NOTIFICATION_END = 'OicpSendChargingNotificationEnd',
  OICP_SEND_CHARGING_NOTIFICATION_ERROR = 'OicpSendChargingNotificationError',
  OICP_ENPOINT_SEND_EVSE_STATUSES = 'OicpEndpointSendEVSEStatuses',
  OICP_ENPOINT_SEND_EVSES = 'OicpEndpointSendEVSEs',
  OICP_ENDPOINT_UPDATE = 'OicpEndpointUpdate',
  OICP_ENDPOINT_REGISTER = 'OicpEndpointRegister',
  OICP_ENDPOINT_UNREGISTER = 'OicpEndpointUnregister',
  OICP_ENDPOINT_DELETE = 'OicpEndpointDelete',
  OICP_ENDPOINTS = 'OicpEndpoints',
  OICP_ENDPOINT = 'OicpEndpoint',

  AUTHORIZE = 'Authorize',

  OCPP_SERVICE = 'OCPPService',

  AUTHORIZATIONS = 'Authorizations',

  DB_WATCH = 'DBWatch',
  DB_MONITOR = 'DBMonitor',

  EXPRESS_SERVER = 'ExpressServer',
  ODATA_SERVER = 'ODataServer',

  LOCKING = 'Locking',

  STARTUP = 'Startup',

  SOCKET_IO = 'SocketIO',

  HEARTBEAT = 'Heartbeat',

  STATUS_NOTIFICATION = 'StatusNotification',

  EXTRA_INACTIVITY = 'ExtraInactivity',

  CONSUMPTION = 'Consumption',
  REBUILD_TRANSACTION_CONSUMPTIONS = 'RebuildTransactionConsumptions',

  WS_CLIENT_ERROR = 'WSClientError',
  WS_CLIENT_INFO = 'WSClientInfo',

  WS_CONNECTION = 'WSConnection',
  WS_CONNECTION_OPENED = 'WSConnectionOpened',
  WS_CONNECTION_CLOSED = 'WSConnectionClosed',

  WS_JSON_CONNECTION_OPENED = 'WSJsonConnectionOpened',
  WS_JSON_CONNECTION_CLOSED = 'WSJsonConnectionClosed',
  WS_JSON_CONNECTION_ERROR = 'WSJsonConnectionError',

  WS_REST_CONNECTION_OPENED = 'WSRestServerConnectionOpened',
  WS_REST_CONNECTION_CLOSED = 'WSRestServerConnectionClosed',
  WS_REST_CONNECTION_ERROR = 'WSRestServerConnectionError',

  WS_REST_CLIENT_ERROR_RESPONSE = 'WSRestClientErrorResponse',
  WS_REST_CLIENT_MESSAGE = 'WSRestClientMessage',
  WS_REST_CLIENT_SEND_MESSAGE = 'WSRestClientSendMessage',
  WS_REST_CLIENT_CONNECTION_CLOSED = 'WSRestClientConnectionClosed',
  WS_REST_CLIENT_CONNECTION_OPENED = 'WSRestClientConnectionOpened',
  WS_REST_CLIENT_CONNECTION_ERROR = 'WSRestClientConnectionError',

  BOOT_NOTIFICATION = 'BootNotification',

  METER_VALUES = 'MeterValues',

  NOTIFICATION = 'Notification',
  CHARGING_STATION_STATUS_ERROR = 'ChargingStationStatusError',
  CHARGING_STATION_REGISTERED = 'ChargingStationRegistered',
  END_OF_CHARGE = 'EndOfCharge',
  OPTIMAL_CHARGE_REACHED = 'OptimalChargeReached',
  END_OF_SESSION = 'EndOfSession',
  REQUEST_PASSWORD = 'RequestPassword',
  USER_ACCOUNT_STATUS_CHANGED = 'UserAccountStatusChanged',
  NEW_REGISTERED_USER = 'NewRegisteredUser',
  UNKNOWN_USER_BADGED = 'UnknownUserBadged',
  TRANSACTION_STARTED = 'TransactionStarted',
  VERIFICATION_EMAIL = 'VerificationEmail',
  AUTH_EMAIL_ERROR = 'AuthentificationErrorEmailServer',
  PATCH_EVSE_STATUS_ERROR = 'PatchEVSEStatusError',
  USER_ACCOUNT_INACTIVITY = 'UserAccountInactivity',
  PREPARING_SESSION_NOT_STARTED = 'PreparingSessionNotStarted',
  OFFLINE_CHARGING_STATIONS = 'OfflineChargingStations',
  BILLING_USER_SYNCHRONIZATION_FAILED = 'BillingUserSynchronizationFailed',
  BILLING_INVOICE_SYNCHRONIZATION_FAILED = 'BillingInvoiceSynchronizationFailed',

  CAR_CATALOG_SYNCHRONIZATION_FAILED = 'CarCatalogSynchronizationFailed',
  CAR_CATALOG_SYNCHRONIZATION = 'CarCatalogSynchronization',
  SESSION_NOT_STARTED_AFTER_AUTHORIZE = 'SessionNotStartedAfterAuthorize',

  UPDATE_CHARGING_STATION_WITH_TEMPLATE = 'UpdateChargingStationWithTemplate',
  UPDATE_CHARGING_STATION_TEMPLATES = 'UpdateChargingStationTemplates',

  MIGRATION = 'Migration',

  SESSION_HASH_SERVICE = 'SessionHashService',

  CLEANUP_TRANSACTION = 'CleanupTransaction',
  TRANSACTIONS_COMPLETED = 'TransactionsCompleted',
  TRANSACTIONS_TO_REFUND = 'TransactionsToRefund',
  TRANSACTIONS_TO_REFUND_EXPORT = 'TransactionsToRefundExport',
  TRANSACTIONS_TO_REFUND_REPORTS = 'TransactionsRefundReports',
  TRANSACTIONS_EXPORT = 'TransactionsExport',
  TRANSACTIONS_ACTIVE = 'TransactionsActive',
  TRANSACTIONS_IN_ERROR = 'TransactionsInError',
  TRANSACTION_YEARS = 'TransactionYears',
  UNASSIGNED_TRANSACTIONS_COUNT = 'UnassignedTransactionsCount',
  TRANSACTION = 'Transaction',
  TRANSACTION_CONSUMPTION = 'TransactionConsumption',

  CHARGING_STATION_CONSUMPTION_STATISTICS = 'ChargingStationConsumptionStatistics',
  CHARGING_STATION_USAGE_STATISTICS = 'ChargingStationUsageStatistics',
  CHARGING_STATION_INACTIVITY_STATISTICS = 'ChargingStationInactivityStatistics',
  CHARGING_STATION_TRANSACTIONS_STATISTICS = 'ChargingStationTransactionsStatistics',
  CHARGING_STATION_PRICING_STATISTICS = 'ChargingStationPricingStatistics',
  STATISTICS_EXPORT = 'StatisticsExport',
  USER_CONSUMPTION_STATISTICS = 'UserConsumptionStatistics',
  USER_USAGE_STATISTICS = 'UserUsageStatistics',
  USER_INACTIVITY_STATISTICS = 'UserInactivityStatistics',
  USER_TRANSACTIONS_STATISTICS = 'UserTransactionsStatistics',
  USER_PRICING_STATISTICS = 'UserPricingStatistics',

  CHARGING_STATION_TRANSACTIONS = 'ChargingStationTransactions',

  DIAGNOSTICS_STATUS_NOTIFICATION = 'DiagnosticsStatusNotification',

  FIRMWARE_STATUS_NOTIFICATION = 'FirmwareStatusNotification',

  ADD_CHARGING_STATIONS_TO_SITE_AREA = 'AddChargingStationsToSiteArea',
  REMOVE_CHARGING_STATIONS_FROM_SITE_AREA = 'RemoveChargingStationsFromSiteArea',

  ADD_ASSET_TO_SITE_AREA = 'AddAssetsToSiteArea',
  REMOVE_ASSET_TO_SITE_AREA = 'RemoveAssetsFromSiteArea',
  ASSET_CREATE = 'AssetCreate',
  ASSETS = 'Assets',
  ASSET = 'Asset',
  ASSET_IMAGE = 'AssetImage',
  ASSETS_IN_ERROR = 'AssetsInError',
  ASSET_UPDATE = 'AssetUpdate',
  ASSET_DELETE = 'AssetDelete',
  CHECK_ASSET_CONNECTION = 'CheckAssetConnection',
  RETRIEVE_ASSET_CONSUMPTION = 'RetrieveAssetConsumption',
  ASSET_CONSUMPTION = 'AssetConsumption',

  TENANT_CREATE = 'TenantCreate',
  TENANTS = 'Tenants',
  TENANT = 'Tenant',
  TENANT_UPDATE = 'TenantUpdate',
  TENANT_DELETE = 'TenantDelete',
  TENANT_LOGO = 'TenantLogo',

  COMPANY_CREATE = 'CompanyCreate',
  COMPANIES = 'Companies',
  COMPANY = 'Company',
  COMPANY_LOGO = 'CompanyLogo',
  COMPANY_UPDATE = 'CompanyUpdate',
  COMPANY_DELETE = 'CompanyDelete',

  SITE_CREATE = 'SiteCreate',
  ADD_SITES_TO_USER = 'AddSitesToUser',
  REMOVE_SITES_FROM_USER = 'RemoveSitesFromUser',
  SITES = 'Sites',
  SITE = 'Site',
  SITE_IMAGE = 'SiteImage',
  SITE_USERS = 'SiteUsers',
  SITE_UPDATE = 'SiteUpdate',
  SITE_USER_ADMIN = 'SiteUserAdmin',
  SITE_OWNER = 'SiteOwner',
  SITE_DELETE = 'SiteDelete',

  SITE_AREA_CREATE = 'SiteAreaCreate',
  SITE_AREAS = 'SiteAreas',
  SITE_AREA = 'SiteArea',
  SITE_AREA_IMAGE = 'SiteAreaImage',
  SITE_AREA_CONSUMPTION = 'SiteAreaConsumption',
  SITE_AREA_UPDATE = 'SiteAreaUpdate',
  SITE_AREA_DELETE = 'SiteAreaDelete',

  TRANSACTIONS_REFUND = 'TransactionsRefund',
  TRANSACTION_PUSH_CDR = 'TransactionPushCdr',
  SYNCHRONIZE_REFUNDED_TRANSACTIONS = 'SynchronizeRefundedTransactions',

  SETTING_CREATE = 'SettingCreate',
  SETTINGS = 'Settings',
  SETTING = 'Setting',
  SETTING_UPDATE = 'SettingUpdate',
  SETTING_DELETE = 'SettingDelete',

  ADD_USERS_TO_SITE = 'AddUsersToSite',
  REMOVE_USERS_FROM_SITE = 'RemoveUsersFromSite',

  REFUND = 'Refund',

  USER_READ = 'UserRead',
  USER_CREATE = 'UserCreate',
  USER_DELETE = 'UserDelete',
  USER_UPDATE = 'UserUpdate',
  USER_UPDATE_MOBILE_TOKEN = 'UpdateUserMobileToken',
  USERS = 'Users',
  USER_SITES = 'UserSites',
  USERS_IN_ERROR = 'UsersInError',
  USER_IMAGE = 'UserImage',
  TAGS = 'Tags',
  TAG = 'Tag',
  USER_DEFAUlT_TAG_CAR = 'UserDefaultTagCar',
  TAG_CREATE = 'TagCreate',
  TAG_UPDATE = 'TagUpdate',
  TAG_DELETE = 'TagDelete',
  TAGS_DELETE = 'TagsDelete',
  USER = 'User',
  USERS_EXPORT = 'UsersExport',

  NOTIFICATIONS = 'Notifications',

  BILLING = 'Billing',
  BILLING_TAX = 'BillingTax',
  BILLING_TRANSACTION = 'BillingTransaction',
  BILLING_SEND_INVOICE = 'BillingSendInvoice',
  BILLING_CREATE_INVOICE = 'BillingCreateInvoice',
  BILLING_CREATE_INVOICE_ITEM = 'BillingCreateInvoiceItem',
  BILLING_SYNCHRONIZE_USERS = 'BillingSynchronizeUsers',
  BILLING_SYNCHRONIZE_USER = 'BillingSynchronizeUser',
  BILLING_FORCE_SYNCHRONIZE_USER = 'BillingForceSynchronizeUser',
  CHECK_BILLING_CONNECTION = 'CheckBillingConnection',
  BILLING_TAXES = 'BillingTaxes',
  BILLING_INVOICES = 'BillingUserInvoices',
  BILLING_USER_INVOICE = 'BillingUserInvoice',
  BILLING_SYNCHRONIZE_INVOICES = 'BillingSynchronizeInvoices',
  BILLING_FORCE_SYNCHRONIZE_USER_INVOICES = 'BillingForceSynchronizeUserInvoices',
  BILLING_DOWNLOAD_INVOICE = 'BillingDownloadInvoice',
  BILLING_CREATE_TRANSACTION_INVOICE = 'BillingCreateTransactionInvoice',
  BILLING_NEW_INVOICE = 'BillingNewInvoice',

  MONGO_DB = 'MongoDB',

  CHECK_AND_APPLY_SMART_CHARGING = 'CheckAndApplySmartCharging',
  COMPUTE_AND_APPLY_CHARGING_PROFILES_FAILED = 'ComputeAndApplyChargingProfilesFailed',
  SMART_CHARGING = 'SmartCharging',

  INSTANTIATE_DUMMY_MODULE = 'InstantiateDummyModule',

  HTTP_REQUEST = 'HttpRequest',
  HTTP_RESPONSE = 'HttpResponse',
  HTTP_ERROR = 'HttpError',

  // RESTful API
  REST_SIGNIN = 'signin',
  REST_SIGNON = 'signon',
  REST_SIGNOUT = 'signout',
  REST_PASSWORD_RESET = 'password/reset',
  REST_END_USER_LICENSE_AGREEMENT = 'eula',
  REST_END_USER_LICENSE_AGREEMENT_CHECK = 'eula/check',
  REST_MAIL_CHECK = 'mail/check',
  REST_MAIL_RESEND = 'mail/resend',
  REST_PING = 'ping',
  REST_TENANTS = 'tenants'
}
