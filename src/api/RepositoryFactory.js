import SiteRepository from './siteRepository';
import LocationRepository from './locationRepository';
import ServiceRepository from './serviceRepository';

const repositories = {
    site        : SiteRepository,
    location    : LocationRepository,
    service     : ServiceRepository
}

export const RepositoryFactory = {
    get      : name => repositories[name],
}