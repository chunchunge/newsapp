<template>
    <div>
        <div class="floorWrapper">
            <div class="meta">
                <div class="info">
                    火星网友
                    <span class="time">2个小时前</span>
                </div>
                 <div class="btnReply">
                    回复
                </div>
            </div>
            <div class="floorContent">
                +10086
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .floorWrapper{
        border:1px solid #eee;
        background: #f8f8f8;
        padding: 2.778vw;
        .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
            font-size: 14px;
            color: #888;
        }
        .btnReply {
            font-size: 14px;
            color: #888;
        }
    }
    .floorContent{
        margin: 2.778vw 0;
    }
    }
</style>