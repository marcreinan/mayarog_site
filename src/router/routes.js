const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "auth-login",
        component: () => import("src/pages/LoginPage.vue"),
      },
      {
        path: "register",
        name: "auth-register",
        component: () => import("src/pages/RegisterPage.vue"),
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: () => import("pages/ForgotPassword.vue"),
      },
      {
        path: "email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/EmailConfirmation.vue"),
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("pages/ResetPassword.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/InnerLayout.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import("pages/Me.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "em-construcao",
        name: "em-construcao",
        component: () => import("pages/UnderConstruction.vue"),
      },
      {
        path: "desenvolvimento-sistemas",
        name: "desenvolvimento-sistemas",
        component: () => import("pages/UnderConstruction.vue"),
      },
    ],
  },
  {
    path: "/consultoria",
    component: () => import("layouts/InnerLayout.vue"),
    children: [
      { path: "info", component: () => import("pages/ConsultingPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
