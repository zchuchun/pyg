import wepy from 'wepy'
const onlineBaseurl = 'https://itjustfun.cn/api/public/v1/'
const localeBaseurl = 'http://localhost:8888/api/public/v1/'

function fetch(url, options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object') {
    options = url
  }
  if (options.type === 'locale') {
    options.url = localeBaseurl + options.url
  } else {
    options.url = onlineBaseurl + options.url
  }
  return wepy.request({
    url: options.url,
    method: options.method || 'GET',
    data: options.data || {},
    header: options.header || {}
  })
}
export default fetch
