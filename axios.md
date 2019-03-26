#axios GET 请求 /xxx?id=1
 
 axios.get('/xxx?id=1')
 axios.get('/xxx', {params: {id:1}} )
 axios({method:'get', url: '/xxx?id=1'})
 axios('/xxx?id=1');