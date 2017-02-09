import {RxHttpRequest} from 'rx-http-request'

const http = RxHttpRequest.defaults({withCredentials: false, json: true})

export {
  http
}
