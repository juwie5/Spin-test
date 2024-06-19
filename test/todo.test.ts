import { setActivePinia, createPinia } from "pinia";
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from "vitest";
import { useTodoStore } from "../store/todo";
import { nanoid } from 'nanoid';

function getFirstId(store: ReturnType<typeof useTodoStore>) {
  return store.tasks[0].id;
}

beforeAll(() => {
  setActivePinia(createPinia());

  // @ts-ignore
  global.$fetch = async () => {
  };

  // @ts-ignore
  global.useRequestHeaders = () => "cookier";
});

afterAll(() => {
  global.$fetch = $fetch;
});

describe("initializes", () => {
  test("works", () => {
    expect(true).toBe(true);
  });
});

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("references a store", () => {
    expect(store).toBeDefined();
  });

  test("has empty todos on init", () => {
    expect(store.tasks).toStrictEqual([]);
  });

  test("adds a todo", async () => {
    await store.addTaskToStore(nanoid(16), "Clean House", "This is a House Cleaning", false);

    expect(store.tasks).toStrictEqual([
      {
        id: expect.any(String),
        title: expect.any(String),
        status: false,
        description: expect.any(String)
      },
    ]);
  });
});