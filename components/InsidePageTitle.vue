<script>
export default {
  props:{
    pageTitle:{type:String},
    pageDescription:{type:String},
  }
}
</script>
<template>
  <section id="page-breadcrumb">
        <div class="vertical-center">
             <b-container>
                <b-row>
                    <div class="action">
                        <b-col sm="12">
                            <h1 class="title">{{pageTitle}}</h1>
                            <p>{{pageDescription}}</p>
                        </b-col>
                    </div>
                </b-row>
            </b-container>
        </div>
  </section>
</template>
<style>

</style>
