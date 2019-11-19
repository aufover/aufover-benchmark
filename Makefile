# read-only source directory
TESTDIR = ./tests

# read-write working directory
WORKDIR = ./workdir

# default target
.PHONY: check
check: $(WORKDIR)
		cmake -S $(TESTDIR) -B $(WORKDIR)
		$(MAKE) check -C $(WORKDIR)

# create $(WORKDIR) if it does not exist already
$(WORKDIR):
	mkdir -p $@
