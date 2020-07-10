<template>
    <div>
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                First section ...
            </div>
            <div class="section">
                Second section ...
            </div>
            <div class="section">
                Third section ...
            </div>
        </full-page>
    </div>
</template>

<script>
export default {

    head: {
        script: [
            { src: 'https://unpkg.com/vue-fullpage.js/dist/vue-fullpage.min.js' }
        ],
    link: [
            { rel: 'stylesheet', href: 'https://unpkg.com/fullpage.js/dist/fullpage.min.css' }
        ]
    },

    data() {
        return {
            options: {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
            }   
        }
    }


}
</script>