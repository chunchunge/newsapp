<template>
    <div>
        <editherd></editherd>
         <profiled  label="昵称"  desl="火星网友" />
         <profiled  label="密码"  desl="******" />
         <profiled  label="性别"  desl="男" />
    </div>
</template>

<script>
import editherd from "../components/editherd"
import profiled from "../components/prolifed"
export default {
    components:{
        editherd:editherd,
        profiled:profiled
    }
}
</script>

<style>

</style>