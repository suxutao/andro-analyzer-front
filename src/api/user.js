import request from '@/api/request.js'


export const predictService=(data)=>{
    const params =new URLSearchParams()
    for(let key in data){
        params.append(key,data[key])
    }
    return request.post('/predict',params)
}

export const trainService=(data)=>{
    const params =new URLSearchParams()
    for(let key in data){
        params.append(key,data[key])
    }
    return request.post('/train',params)
}

export const testService=()=>{
    return request.get('/')
}

export const sfcgService=()=>{
    return request.get('/sfcg')
}

export const loadService=()=>{
    return request.get('/load')
}

export const hashService=(url)=>{
    const params =new URLSearchParams()
    params.append('url',url)
    return request.post('/hash',params)
}