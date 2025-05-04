import request from '@/api/request.js'


export const predictService=(data)=>{
    const params =new URLSearchParams()
    for(let key in data){
        params.append(key,data[key])
    }
    return request.post('/predict',params)
}

export const trainService=(url)=>{
    const params =new URLSearchParams()
    params.append('dataURL',url)
    return request.post('/predict',params)
}

export const testService=()=>{
    return request.get('/')
}

export const sfcgService=()=>{
    return request.get('/sfcg')
}