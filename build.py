import os, glob
from pathlib import Path

mdxs = glob.glob("**/index.mdx")

print(mdxs)

dirs = [Path(mdx).parent.absolute() for mdx in mdxs]
mdxs = [Path(mdx) for mdx in mdxs]

for (mdx, d) in zip(mdxs, dirs):
    os.chdir(d)
    cmd = f'yarn run mdx-deck build {mdx} -d {d}'
    print(cmd)
    os.system(cmd)
    print('\n')
