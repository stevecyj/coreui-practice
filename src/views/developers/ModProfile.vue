<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12" lg="8" offset-lg="2">
        <b-card>
          <div slot="header">
            <strong>輸入修改資料</strong>
          </div>
          <b-form>
            <b-form-group description label="輸入舊密碼：" label-for="oldPasswd" label-cols-lg="3">
              <b-form-input id="oldPasswd" type="text" placeholder="輸入舊密碼"></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group description label="輸入新密碼：" label-for="newPasswd" label-cols-lg="3">
              <b-form-input id="newPasswd" type="text" placeholder="輸入新密碼"></b-form-input>
            </b-form-group>
            <hr />
            <b-form-group
              description
              label="再次確認新密碼："
              label-for="confirmNewPasswd"
              label-cols-lg="3"
            >
              <b-form-input id="confirmNewPasswd" type="text" placeholder="再次確認新密碼"></b-form-input>
            </b-form-group>
            <hr />

            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary">
                <i class="fa fa-dot-circle-o"></i> Submit
              </b-button>
              <b-button type="reset" size="sm" variant="danger">
                <i class="fa fa-ban"></i> Reset
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  email,
  sameAs,
  helpers
} from "vuelidate/lib/validators";

const mustAccept = value => {
  return Boolean(value);
};
const strongPass = helpers.regex(
  "strongPass",
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
);

const formShape = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
};

export default {
  name: "ValidationForms",
  data() {
    return {
      form: Object.assign({}, formShape),
      feedBack: "secondary",
      submitted: false
    };
  },
  computed: {
    formStr() {
      return JSON.stringify(this.form, null, 4);
    },
    isValid() {
      return !this.$v.form.$anyError;
    },
    isDirty() {
      return this.$v.form.$anyDirty;
    },
    invCheck() {
      return "You must accept before submitting";
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(1)
      },
      userName: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8),
        strongPass
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      accept: {
        required,
        mustAccept
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.validate()) {
        this.$nextTick(() => {
          // submit
          // console.log('submit:', this.formStr)
          this.submitted = true;
          this.feedBack = "info";
        });
      }
    },
    onReset() {
      // Reset validation
      this.form = Object.assign({}, formShape);
      this.submitted = false;
      this.$nextTick(() => {
        this.$v.$reset();
        this.feedBack = "secondary";
      });
    },
    chkState(val) {
      const field = this.$v.form[val];
      return !field.$dirty || !field.$invalid;
    },
    findFirstError(component = this) {
      if (component.state === false) {
        if (component.$refs.input) {
          component.$refs.input.focus();
          return true;
        }
        if (component.$refs.check) {
          component.$refs.check.focus();
          return true;
        }
      }
      let focused = false;
      component.$children.some(child => {
        focused = this.findFirstError(child);
        return focused;
      });

      return focused;
    },
    validate() {
      this.$v.$touch();
      this.$nextTick(() => this.findFirstError());
      return this.isValid;
    }
  }
};
</script>

<style scoped>
.btn.disabled {
  cursor: auto;
}
</style>
