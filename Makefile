# read-only source directory
TESTDIR = ./tests

# read-write working directory
WORKDIR = ./workdir

.PHONY: check configure test

# default target
configure: $(WORKDIR)
		cmake -S $(TESTDIR) -B $(WORKDIR)

check: configure
		$(MAKE) $@ -C $(WORKDIR)

test: configure
		$(MAKE) $@ -C $(WORKDIR)

# create $(WORKDIR) if it does not exist already
$(WORKDIR):
	mkdir -p $@
