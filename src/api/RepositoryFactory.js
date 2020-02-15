import SiteRepository from './siteRepository';
import LocationRepository from './locationRepository';
import ServiceRepository from './serviceRepository';
import BlogRepository from './blogRepository';

const repositories = {
    site        : SiteRepository,
    location    : LocationRepository,
    service     : ServiceRepository,
    blog        : BlogRepository
}

export const RepositoryFactory = {
    get      : name => repositories[name],
}