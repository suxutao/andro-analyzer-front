import request from '@/api/request.js'


export const predictService=(url)=>{
    const params =new URLSearchParams()
    params.append('apkURL',url)
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