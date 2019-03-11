<template>
    <div id="header-title">
        <p>{{title}}</p>
        <p>{{className}}</p>
    </div>
</template>

<script>
import { constants } from '@/common'

export default {
    name: 'HeaderTitleComponent',
    props: {
        title: {
            type: String,
            default: constants.defaultTitle
        },
        className: {
            type: String,
            default: constants.defaultClassName
        }
    }
}
</script>

