import Repository from './Repository';

const resource = '/locations';

export default {
    getNames()      {return Repository.get(`${resource}/names`);},
    show(slug)      {return Repository.get(`${resource}/${slug}/show`);},
}