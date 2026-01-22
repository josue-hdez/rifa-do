import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { ShieldAlert, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex-center">
      <Empty className="w-full max-w-sm border border-dashed bg-muted/30">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ShieldAlert />
          </EmptyMedia>
          <EmptyTitle>Unauthorized Access</EmptyTitle>
          <EmptyDescription>
            You do not have permission to view this page. The account or
            credentials you’re using don’t grant access to this resource, or
            your session may have expired.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" asChild>
            <Link href="/sign-in">
              <ExternalLink />
              Go to Login
            </Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default Page;
