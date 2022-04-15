// 二叉树节点的定义
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

export const inorderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (r: TreeNode | null): void => {
    if (!r) {
      return;
    }
    dfs(r.left);
    res.push(r.val);
    dfs(r.right);
  };
  dfs(root);
  return res;
};
