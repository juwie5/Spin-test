describe('import vue components', () => {
  test('normal imports as expected',  async ()=> {
    const cmp = await import('../compoments/Tasks.vue')
    expect(cmp).toBeDefined()
  })  
})