<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col>
          <b-card header-tag="header" footer-tag="footer">
            <!-- <div slot="header">
              <i class="fa fa-align-justify"></i>
              <strong>Jumbotron</strong>
              <small>variants</small>
            </div>-->
            <div>
              <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
                <template slot="header">歡迎回來</template>
                <!-- <template slot="lead">
                  This is a simple hero unit, a simple jumbotron-style component for
                  calling extra attention to featured content or information.
                </template>
                <hr class="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space content
                  out within the larger container.
                </p>-->
              </b-jumbotron>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "jumbotrons"
};
</script>

