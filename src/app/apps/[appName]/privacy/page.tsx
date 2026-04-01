import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// URL 파라미터 타입 정의
interface PageProps {
    params: Promise<{
        appName: string;
    }>;
}

export default async function AppPrivacyPolicyPage({ params }: PageProps) {
    // 1. 파라미터 가져오기 및 마크다운 경로 찾기
    const resolvedParams = await params;
    const { appName } = resolvedParams;
    const filePath = path.join(process.cwd(), 'src/content/privacy-policies', `${appName}.md`);

    // 2. 파일 존재하는지 검사
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    // 3. 마크다운 읽어오기
    const markdownContent = fs.readFileSync(filePath, 'utf-8');

    // 4. 문서 렌더링
    return (
        <main className="min-h-screen py-20 px-4 flex justify-center bg-gray-50 dark:bg-[#000108]">
            <article className="prose prose-slate dark:prose-invert max-w-3xl w-full bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-2xl shadow-sm border border-transparent dark:border-white/10 dark:text-gray-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdownContent}
                </ReactMarkdown>
            </article>
        </main>
    );
}

// SSG 정적 빌드 지원 
export async function generateStaticParams() {
    const policiesDir = path.join(process.cwd(), 'src/content/privacy-policies');

    if (!fs.existsSync(policiesDir)) return [];

    const files = fs.readdirSync(policiesDir);

    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => ({
            appName: file.replace(/\.md$/, ''),
        }));
}
