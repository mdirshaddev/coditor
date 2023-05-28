// Sentry
import { captureException } from '@sentry/nextjs';

// Node path lib
import { join } from 'path';

// MDX bundler
import { bundleMDX } from 'mdx-bundler';

// Rehype packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/* `const ROOT = process.cwd();` is setting the `ROOT` constant to the current working directory of the
Node.js process. This is useful for resolving file paths relative to the root directory of the
project. */
const ROOT = process.cwd();

/**
 * This function compiles Markdown content with modifications for implementing a table of contents.
 * @param {string} content - A string representing the content of a Markdown file.
 * @returns The `getCompiledMDX` function is returning a Promise that resolves to the compiled MDX
 * content with modifications made to the Markdown content, including the addition of plugins for
 * generating a table of contents and syntax highlighting. If an error occurs during the bundling
 * process, it will be caught and logged using the `captureException` function.
 */
const getCompiledMDX = async (content: string) => {
  // For Some reason there are scenarios where we might get Directory error
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  // MOdifying the Content of Markdown and Making a room of implementation of Table of Content
  try {
    return await bundleMDX({
      source: content,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypePrism,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['hash-anchor']
              }
            }
          ]
        ];
        return options;
      }
    });
  } catch (e) {
    captureException(e);
  }
};
