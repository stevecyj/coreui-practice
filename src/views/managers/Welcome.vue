<template>
  <div class="wrapper" style="margin-top: 25px">
    <div class="animated fadeIn">
      <b-row>
        <b-col>
          <b-card header-tag="header" footer-tag="footer">
            <!-- <div slot="header">
              <i class="fa fa-align-justify"></i> <strong> Jumbotron </strong>
              <small>variants</small>
            </div>-->
            <!-- <div> -->
            <b-jumbotron
              bg-variant="black"
              text-variant="dark"
              style="font-family:fantasy;text-align:center;"
            >
              <template slot="header">Welcome &nbsp; {{userName}}</template>
              <!-- <template slot="lead">
                  This is a simple hero unit, a simple jumbotron-style component for
                  calling extra attention to featured content or information.
              </template>-->
              <!-- <hr class="my-4"> -->
              <!-- <p>
                  It uses utility classes for typography and spacing to space content
                  out within the larger container.
              </p>-->
            </b-jumbotron>
            <!-- </div> -->
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: sessionStorage.getItem("userName")
    };
  }
};
</script>

