<template>
   <div>
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-center">
      <mdb-row>
        <mdb-col sm="3">
          <h5 class="title">Morecado Libre</h5>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://github.com/andres-morenogr"> Andres Moreno </a>
      </mdb-container>
    </div>
  </mdb-footer>
  </div>
</template>

<script>
export default {
 name: 'Footer',
  props: {
    msg: String
  }

}
</script>

<style>

</style>