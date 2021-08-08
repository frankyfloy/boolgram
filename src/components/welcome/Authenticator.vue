<template>
    <form>
        <div class="pr-3">
            <v-text-field

            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                required
                @click:append="showPassword = !showPassword"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>
        </div>

        <div class="my-2">
            <v-btn
            class="mr-4 px-2"
            @click="submit"
            color="primary"
            dense
            group
            multiple
            >
                submit
            </v-btn>

            <v-btn
            @click="clear"
            class="px-2"
            color="primary"
            dense
            group
            multiple>
                clear
            </v-btn>
        </div>
    </form>
</template>


<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

// Vuex
import { mapGetters, mapActions} from 'vuex';

export default {
    name: "Authenticator",

    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        password: { required }
    },

    data: () => ({
        email: '',
        password:'',
        showPassword: false
    }),

    computed: {

        ...mapGetters('authentication', [
            'isAuthenticated'
        ]),

        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },

        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Password is required')
            return errors
        }
    },

    methods: {

        // Set User - Mutation
        ...mapActions('authentication',['logged']),

        submit () {
            this.$v.$touch()

            this.logged({
                email:this.email,
                password:this.password,
            })
        },
        // --------------------

        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.password = ''
        }
    }
}
</script>

