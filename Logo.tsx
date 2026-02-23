import Image from 'next/image';

export default function Logo() {
    return (
        <Image src="/logo.png" alt="StarkSeal Logo" width={64} height={64} priority />
    );
}
