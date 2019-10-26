<template>
  <div class="animated fadeIn" style="margin-top: 25px">


    <b-card no-body class="card-default">
      <b-card-body>
        
<div class="container-fluid">
	<!-- <div class="row"> -->
		<!-- <div class="col-md-12"> -->
		<div>
			<div class="media" style="margin-bottom: 20px">
				<img class="img-rounded" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" style="margin-right: 20px" width="120px" height="120px" />
				<div class="media-body">
					<h5 style="margin-bottom: 20px">
            {{appName}}
					</h5> 
            {{appSummary}}
				</div>
			</div>
      <div style="margin-bottom: 20px">
        <img class="img-rounded" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" style="margin-right: 20px" width="180px" height="240px" />
        <img class="img-rounded" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" style="margin-right: 20px" width="180px" height="240px" />
      </div>
      <div style="margin-bottom: 20px">
        {{appVersion}}
      </div>
      <div>
        {{appIntroduction}}
      </div>
		</div>
	<!-- </div> -->
</div>

        <!-- <img v-bind:src="events.appIcon" class="img-rounded"> -->
                  <!-- <template v-slot:aside> -->
                    <!-- <b-img
                      v-bind:src="event.appIcon"
                      class="img-circle"
                      width="120"
                      alt="placeholder"
                    ></b-img> -->
                  <!-- </template> -->
      </b-card-body>
    </b-card>


  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: sessionStorage.getItem("appName"),
      appVersion: sessionStorage.getItem("appVersion"),
      appSummary: sessionStorage.getItem("appSummary"),
      appIntroduction: sessionStorage.getItem("appIntroduction"),
      oldPwd: "",
      newPwd: "",
      pwdCheck: ""
    };
  },
}
</script>