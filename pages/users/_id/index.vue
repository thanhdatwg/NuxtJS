<template>
    <h1>A singer user, with ID : {{$route.params.id}}</h1>
</template>

<script>
export default {
    validate(a){
        // console.log(a)
        return  /^\d+$/.test(a.params.id)         
        // điều kiện để load đc trang id phải là số 
    },
    layout: 'users'
}
</script>