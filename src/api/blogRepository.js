import Repository from './Repository';

const resource = '/blogs';

export default {
    get(params)      {return Repository.get(`${resource}`, params);},
    show(slug)      {return Repository.get(`${resource}/${slug}`);},
}