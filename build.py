import os, glob
from pathlib import Path

mdxs = glob.glob("src/*/index.mdx")

print(mdxs)

dirs = [Path(mdx).parent.absolute() for mdx in mdxs]
mdxs = [Path(mdx) for mdx in mdxs]

for (mdx, d) in zip(mdxs, dirs):
    print(d.name)
    os.system(f'mkdir -p build/{d.name}')
    cmd = f'yarn run mdx-deck build {mdx} -d build/{d.name}'
    print(cmd)
    os.system(cmd)
    cmd = f'cp -r src/{d.name}/img build/{d.name}/'
    print(cmd)
    os.system(cmd)
    # print('\n')
