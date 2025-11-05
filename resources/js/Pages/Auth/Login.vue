<script setup>
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Components/TextInput.vue";

const form = useForm({
    email: null,
    password: null,
    remember: null,
});

const submit = () => {
    form.post(route("login"), {
        onError: () => form.reset("password", "remember"),
    });
};
</script>

<template>
    <Head title="Login" />
    <div class="relative">
        <h1 class="title">Login to your account</h1>
        <p class="text-2xl bg-green-500">{{ $page.props.flash.message }}</p>
        <div class="w-2/4 mx-auto">
            <form
                @submit.prevent="submit"
                class="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <TextInput
                    name="email"
                    type="email"
                    v-model="form.email"
                    :message="form.errors.email"
                />

                <TextInput
                    name="password"
                    type="password"
                    v-model="form.password"
                    :message="form.errors.password"
                />

                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" v-model="form.remember" />
                        <label>Remember me</label>
                    </div>

                    <p class="text-slate-600">
                        Need an account?
                        <Link class="text-link" :href="route('register')"
                            >Register</Link
                        >
                    </p>
                </div>
                <div>
                    <button class="primary-btn" :disabled="form.processing">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
