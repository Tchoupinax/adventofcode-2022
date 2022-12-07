import { readFileSync } from "fs";
import { get, set } from "lodash";

const text: string = readFileSync("inputs/day-7.txt", "utf-8");
const commands = text.split("\n").map(str => str.trim());

type Tree = { [key: string]: any }

function fn (
  tree: Tree,
  commands: Array<string>,
  currentPath: string,
) {
  const command = commands.at(0)!;

  if (command === undefined || command?.length === 0) {
    return tree;
  }

  if (command?.startsWith("$ cd")) {
    const [,, path] = command.split(" ");

    if (path === "..") {
      return fn(
        tree,
        commands.slice(1),
        currentPath.split("/").slice(0, -1).join("/") ?? "/",
      );
    }

    return fn(
      tree,
      commands.slice(1),
      `${currentPath}${path === "/" || currentPath === "/" ? "" : "/"}${path}`,
    );
  }

  if (command?.startsWith("$ ls")) {
    return fn(tree, commands.slice(1), currentPath);
  }

  if (command?.startsWith("dir")) {
    const [, dirname] = command.split(" ");

    let deepPath = "/" + currentPath.split("/").join(".");
    if (deepPath.endsWith(".")) {
      deepPath = deepPath.slice(0, -1);
    }

    set(tree, deepPath, {
      ...get(tree, deepPath),
      [dirname]: {},
    });

    return fn(tree, commands.slice(1), currentPath);
  }

  const [size, filename] = command.split(" ");

  let deepPath = "/" + currentPath.split("/").join(".");
  if (deepPath.endsWith(".")) {
    deepPath = deepPath.slice(0, -1);
  }
  set(tree, deepPath, {
    ...get(tree, deepPath),
    [filename]: size,
  });

  return fn(tree, commands.slice(1), currentPath);
}

function computeDirectorySize (tree: Tree) {
  console.log(tree);

  Object.keys(tree).forEach(key => {
    if (typeof tree[key] === "object") {

    } else {

    }
  });

  return [];
}

const finalTree = fn({}, commands, "");
computeDirectorySize(finalTree);
