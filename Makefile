# dnf options
DNF_OPTS += --best --skip-broken

# read-only source directory
TESTDIR ?= ./tests

# read-write working directory
WORKDIR ?= ./workdir

# we need to use CMAKE=cmake3 on RHEL-7
CMAKE ?= cmake

ifdef MOCK_PROFILE
	CMAKE_OPTS += -DMOCK_PROFILE='$(MOCK_PROFILE)'
endif

ifdef CSMOCK_ADD_OPTS
	CMAKE_OPTS += -DCSMOCK_ADD_OPTS='$(CSMOCK_ADD_OPTS)'
endif

.PHONY: check check-all check-csmock configure configure-all configure-csmock install-deps test

# default target (single-c only)
configure: $(WORKDIR)
	$(CMAKE) -S $(TESTDIR) -B $(WORKDIR) -DENABLE_RPM_PKGS=OFF -DENABLE_SINGLE_C=ON $(CMAKE_OPTS)

configure-all:
	$(CMAKE) -S $(TESTDIR) -B $(WORKDIR) -DENABLE_RPM_PKGS=ON -DENABLE_SINGLE_C=ON $(CMAKE_OPTS)

configure-csmock:
	$(CMAKE) -S $(TESTDIR) -B $(WORKDIR) -DENABLE_RPM_PKGS=ON -DENABLE_SINGLE_C=OFF $(CMAKE_OPTS)

# default check target (single-c only)
check test: configure
	$(MAKE) $@ -C $(WORKDIR)

check-all: configure-all
	$(MAKE) check -C $(WORKDIR)

check-csmock: configure-csmock
	$(MAKE) check -C $(WORKDIR)

# create $(WORKDIR) if it does not exist already
$(WORKDIR):
	mkdir -p $@

install-deps:
	# needless to install make as nobody would ever run this without make
	sudo dnf install $(DNF_OPTS) cbmc cbmc-utils clang cmake coreutils cppcheck \
		csdiff diffutils divine gcc predator symbiotic zsh
