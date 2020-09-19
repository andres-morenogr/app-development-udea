<template>
  <div>
    <b-jumbotron bg-variant="yellow" text-variant="text" header="MORECADO LIBRE" lead="El mejor sitio para comprar en linea">
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style >
.bg-yellow {
    background-color: #ffe600!important;
}
.bg-text {
    color: #2e3191 !important;
}
</style>