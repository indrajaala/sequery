<template>
  <codemirror
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="type an sql query..."
      :style="{ height: '200px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
  />
</template>

<script setup>
import{ref, shallowRef} from "vue";
import {Codemirror} from 'vue-codemirror';
import {sql} from '@codemirror/lang-sql';
import {oneDark} from '@codemirror/theme-one-dark';


// defineProps(['modelValue']);
// defineEmits(['update:modelValue'])

const extensions = [sql(), oneDark]

// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
  const state = view.value.state
  const ranges = state.selection.ranges
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
  const cursor = ranges[0].anchor
  const length = state.doc.length
  const lines = state.doc.lines
  // more state info ...
  // return ...
}


</script>