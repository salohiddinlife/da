<template>
  <div class="ibook">
    <div class="container">
      <div v-if="getImgs" class="ibook__photos">
        <div class="ibook__photos-item" v-for="(product, id) in products" :key="id">
          <img class="ibook__img" :src="product.url || this.products.url" />
          <p class="ibook__title">{{ product.title || this.products.title }}</p>
        </div>
        <div class="ibook__photos-add" @click="closeModal = true">
          <img src="@/assets/img/plus.svg" alt="" />
        </div>
        <Transition name="modal">
          <div
            class="modal"
            v-if="closeModal"
            @click="
              closeModal = false;
              title = url = '';
            "
          >
            <div class="modal__block" @click.stop="">
              <h2 class="modal__block-title">Отправить картинку</h2>
              <div class="modal__block-inputs">
                <label for="inp">
                  <span>URL</span>
                  <input id="inp" type="text" v-model="url" />
                </label>
                <label for="area">
                  <span>Комментарий</span>
                  <textarea id="area" v-model="title"></textarea>
                </label>
              </div>
              <div class="modal__block-btns">
                <button
                  class="modal__block-btns-btn del"
                  @click="
                    closeModal = false;
                    title = url = '';
                  "
                >
                  Отмена
                </button>
                <button class="modal__block-btns-btn edit" @click="addImg">ОТПРАВИТЬ</button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <h2 v-else>loading...</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      url: "",
      closeModal: false,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getImgs"]),
    addImg() {
      const newImage = {
        id: this.generateUniqueId(),
        url: this.url,
        title: this.title,
      };

      this.products.push(newImage);
      this.closeModal = false;
      this.title = this.url = "";
    },
    generateUniqueId() {
      const highestId = Math.max(...this.products.map((product) => product.id), 0);
      return highestId + 1;
    },
  },
  watch: {
    products: {
      handler(newProducts) {
        localStorage.setItem("productsData", JSON.stringify(newProducts));
      },
      deep: true,
    },
  },
  mounted() {
    this.getImgs();
    const storedProducts = localStorage.getItem("productsData");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  },
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.3);
}
</style>
