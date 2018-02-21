declare module '*.scss' {
  import Vue, { ComponentOptions } from 'vue';
  interface Template {
    <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const template: Template;
  export default template;
}

declare module '*.html' {
  import Vue, { ComponentOptions } from 'vue';
  interface Template {
    <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const template: Template;
  export default template;
}
