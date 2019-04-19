import $http from './request';
import URLS from './url';

export const businessService = (name, params, config) => {
    const url = URLS.business.replace('<url>', name);
    return $http.request(url, params, config);
}

export const clientService = (name, params, config) => {
    const url = URLS.client.replace('<url>', name);
    return $http.request(url, params, config);
}

export const commonExportService = (name, params, config) => {
    const url = URLS.commonExport.replace('<url>', name);
    return $http.request(url, params, config);
}

export const analyzeService = (name, params, config) => {
    const url = URLS.analyze.replace('<url>', name);
    return $http.request(url, params, config);
}

export const pushConfigService = (url, params, config) => {
    return $http.request(`URLS.pushConfig/${url}`, params, config);
}

export const faceService = (name, params, config) => {
    const url = URLS.face.replace('<url>', name);
    return $http.request(url, params, config);
}

export default {
    businessService,
    clientService,
    commonExportService,
    analyzeService,
    pushConfigService,
    faceService
}