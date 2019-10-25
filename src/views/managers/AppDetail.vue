<template>
  <div class="animated fadeIn">


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
						<!-- {{events.appName}} -->
					</h5> 
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
				</div>
			</div>
      <div style="margin-bottom: 20px">
        <img class="img-rounded" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" style="margin-right: 20px" width="180px" height="240px" />
        <img class="img-rounded" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" style="margin-right: 20px" width="180px" height="240px" />
      </div>
      <div style="margin-bottom: 20px">
        版本說明
      </div>
      <div>
        詳細介紹
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
// import EventService from "@/service/EventService.js";

// export default {
//   data() {
//     return {
//       keyword: "",
//       events: []
//     };
//   },
//   created() {
//     EventService.checkApps()
//       .then(response => {
//         this.events = response.data;
//       })
//       .catch(error => {
//         console.log("There was an error:", error.response);
//       });
//   },
//   methods: {
//     search(keyword) {
//       var newList = [];
//       this.events.forEach(event => {
//         if (event.name.indexOf(keyword) != -1) {
//           newList.push(event);
//         }
//       });
//       return newList;
//     },
//     CheckOK(id) {
//       this.axios
//         .put("http://127.0.0.1:8000/api/Admin/appCheckOk/" + id)
//         .then(res => {
//           this.events = res.data;
//           console.log(res);
//         })
//         .catch(error => {
//           console.log(error.res);
//         });
//     },
//     goBack(id) {
//       this.axios
//         .put("http://127.0.0.1:8000/api/Admin/appGoBack/" + id)
//         .then(res => {
//           this.events = res.data;
//         })
//         .catch(error => {
//           console.log(error.res);
//         });
//     }
//   }
// };
</script>